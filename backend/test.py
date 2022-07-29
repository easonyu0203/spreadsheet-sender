from email.mime.multipart import MIMEMultipart
import json
import os.path

from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
import base64
from email.mime.text import MIMEText
from email.message import EmailMessage

# If modifying these scopes, delete the file token.json.
SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly']


def main():

    data = dict({"token": "ya29.A0AVA9y1vvTqshmj1KhwM9HfWI7UHzg-S75Ih2QAcd0F6Ep3_m6GnuHUlvFfErA47aF3QetdBkownEXSRdl0b7hn8OC_IjmO017it6bYcJYFwtBpyMt1DF2OWlQOCp7fpfBIvVHnlH9OLMFAWUKAbb6zmNyEKeYUNnWUtBVEFTQVRBU0ZRRTY1ZHI4eFR5VUNwYUl1d0g2TmljNHhCTTFuZw0163",
                "mail": {"to": "breaking0203@gmail.com", "subject": "sample title", "text": "sample content", "html": "<p>sample content</p>"}})
    token = data["token"]
    mailConfig = data["mail"]
    service = build('gmail', 'v1', credentials=Credentials(token))
    # get email address
    emailAdress = service.users().getProfile(userId="me").execute()["emailAddress"]
    print(f"my email {emailAdress}")
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
    print(f"send message: {send_message}")


if __name__ == '__main__':
    main()
