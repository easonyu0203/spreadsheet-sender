# -*- coding: utf-8 -*-

from email.mime.multipart import MIMEMultipart
import os
import string
import flask
from flask import request
from flask_cors import CORS

from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

import base64
from email.mime.text import MIMEText

app = flask.Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return "Hello"


# post token: access-token
@app.route('/test', methods=['POST'])
def test_api_request():
    # args
    data: string = request.get_json()
    token: string = data["token"]
    mailConfig = data["mail"]
    # use gmail api
    service = build('gmail', 'v1', credentials=Credentials(token))
    # get email address
    emailAdress = service.users().getProfile(userId="me").execute()["emailAddress"]
    # make email
    # header
    message = MIMEMultipart('alternative')
    message["Subject"] = mailConfig["subject"]
    message["From"] = emailAdress
    message["To"] = mailConfig["to"]
    # content
    text = mailConfig["text"]
    html = mailConfig["html"]
    message.attach(MIMEText(text, "plain"))
    message.attach(MIMEText(html, "html"))
    # send email
    encoded_message = base64.urlsafe_b64encode(message.as_bytes()).decode()
    create_message = {
        'raw': encoded_message
    }
    send_message = service.users().messages().send(
        userId="me", body=create_message).execute()

    return {"success": True, "send_message": send_message}


if __name__ == '__main__':
    # When running locally, disable OAuthlib's HTTPs verification.
    # ACTION ITEM for developers:
    #     When running in production *do not* leave this option enabled.
    os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'

    # Specify a hostname and port that are set as a valid redirect URI
    # for your API project in the Google API Console.
    app.run('localhost', 5000, debug=True)
