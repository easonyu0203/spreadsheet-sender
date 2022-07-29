const GenerateAriticle = (title: string, content: string, extra: string) => {
  const template = `<!DOCTYPE html>
  
  <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
  
  <head>
      <title></title>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <!--[if mso
        ]><xml
          ><o:OfficeDocumentSettings
            ><o:PixelsPerInch>96</o:PixelsPerInch
            ><o:AllowPNG /></o:OfficeDocumentSettings></xml
      ><![endif]-->
      <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css" />
      <!--<![endif]-->
      <style>
          * {
              box-sizing: border-box;
          }
          
          body {
              margin: 0;
              padding: 0;
          }
          
          a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
          }
          
          #MessageViewBody a {
              color: inherit;
              text-decoration: none;
          }
          
          p {
              line-height: inherit;
          }
          
          .desktop_hide,
          .desktop_hide table {
              mso-hide: all;
              display: none;
              max-height: 0px;
              overflow: hidden;
          }
          
          @media (max-width: 660px) {
              .desktop_hide table.icons-inner {
                  display: inline-block !important;
              }
              .icons-inner {
                  text-align: center;
              }
              .icons-inner td {
                  margin: 0 auto;
              }
              .row-content {
                  width: 100% !important;
              }
              .mobile_hide {
                  display: none;
              }
              .stack .column {
                  width: 100%;
                  display: block;
              }
              .mobile_hide {
                  min-height: 0;
                  max-height: 0;
                  max-width: 0;
                  overflow: hidden;
                  font-size: 0px;
              }
              .desktop_hide,
              .desktop_hide table {
                  display: table !important;
                  max-height: none !important;
              }
          }
      </style>
  </head>
  
  <body style="
        background-color: #ffffff;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
      ">
      <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          background-color: #ffffff;
        " width="100%">
          <tbody>
              <tr>
                  <td>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          border-radius: 0;
                          width: 640px;
                        " width="640">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                padding-top: 5px;
                                padding-bottom: 5px;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              " width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                " width="100%">
                                                          <tr>
                                                              <td class="pad" style="width: 100%; text-align: center">
                                                                  <h1 style="
                                        margin: 0;
                                        color: #555555;
                                        font-size: 32px;
                                        font-family: Montserrat, Trebuchet MS,
                                          Lucida Grande, Lucida Sans Unicode,
                                          Lucida Sans, Tahoma, sans-serif;
                                        line-height: 120%;
                                        text-align: center;
                                        direction: ltr;
                                        font-weight: 700;
                                        letter-spacing: normal;
                                        margin-top: 0;
                                        margin-bottom: 0;
                                      ">
                                                                      <span class="tinyMce-placeholder">${title}</span
                                      >
                                    </h1>
                                  </td>
                                </tr>
                              </table>
                              <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="divider_block block-2"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad">
                                    <div align="center" class="alignment">
                                      <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                        "
                                        width="100%"
                                      >
                                        <tr>
                                          <td
                                            class="divider_inner"
                                            style="
                                              font-size: 1px;
                                              line-height: 1px;
                                              border-top: 1px solid #bbbbbb;
                                            "
                                          >
                                            <span> </span>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      </div>
                                                  </td>
                                              </tr>
                                      </table>
                                      <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-3" role="presentation" style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                " width="100%">
                                          <tr>
                                              <td class="pad" style="
                                      padding-top: 10px;
                                      padding-right: 10px;
                                      padding-bottom: 60px;
                                      padding-left: 25px;
                                    ">
                                                  <div style="
                                        color: #000000;
                                        font-size: 16px;
                                        font-family: Montserrat, Trebuchet MS,
                                          Lucida Grande, Lucida Sans Unicode,
                                          Lucida Sans, Tahoma, sans-serif;
                                        font-weight: 400;
                                        line-height: 120%;
                                        text-align: left;
                                        direction: ltr;
                                        letter-spacing: 0px;
                                        mso-line-height-alt: 19.2px;
                                      ">
                                                      <p style="margin: 0">
                                                          ${content}
                                                      </p>
                                                  </div>
                                              </td>
                                          </tr>
                                      </table>
                                      <table border="0" cellpadding="10" cellspacing="0" class="divider_block block-4" role="presentation" style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                " width="100%">
                                          <tr>
                                              <td class="pad">
                                                  <div align="center" class="alignment">
                                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                        " width="100%">
                                                          <tr>
                                                              <td class="divider_inner" style="
                                              font-size: 1px;
                                              line-height: 1px;
                                              border-top: 1px solid #bbbbbb;
                                            ">
                                                                  <span> </span>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </div>
                                              </td>
                                          </tr>
                                      </table>
                                      <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-5" role="presentation" style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                " width="100%">
                                          <tr>
                                              <td class="pad" style="
                                      padding-top: 10px;
                                      padding-right: 10px;
                                      padding-bottom: 10px;
                                      padding-left: 30px;
                                    ">
                                                  <div style="
                                        color: #a2a2a2;
                                        font-size: 14px;
                                        font-family: Montserrat, Trebuchet MS,
                                          Lucida Grande, Lucida Sans Unicode,
                                          Lucida Sans, Tahoma, sans-serif;
                                        font-weight: 400;
                                        line-height: 120%;
                                        text-align: left;
                                        direction: ltr;
                                        letter-spacing: 0px;
                                        mso-line-height-alt: 16.8px;
                                      ">
                                                      <p style="margin: 0">
                                                          ${extra}
                                                      </p>
                                                  </div>
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                              </tbody>
                      </table>
                  </td>
              </tr>
              </tbody>
      </table>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt" width="100%">
          <tbody>
              <tr>
                  <td>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 640px;
                        " width="640">
                          <tbody>
                              <tr>
                                  <td class="column column-1" style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                padding-top: 5px;
                                padding-bottom: 5px;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              " width="100%">
                                      <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                " width="100%">
                                          <tr>
                                              <td class="pad" style="
                                      vertical-align: middle;
                                      color: #9d9d9d;
                                      font-family: inherit;
                                      font-size: 15px;
                                      padding-bottom: 5px;
                                      padding-top: 5px;
                                      text-align: center;
                                    ">
                                                  <table cellpadding="0" cellspacing="0" role="presentation" style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                      " width="100%">
                                                      <tr>
                                                          <td class="alignment" style="
                                            vertical-align: middle;
                                            text-align: center;
                                          ">
                                                              <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                              <!--[if !vml]><!-->
                                                              <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                              display: inline-block;
                                              margin-right: -4px;
                                              padding-left: 0px;
                                              padding-right: 0px;
                                            ">
                                                                  <!--<![endif]-->
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </table>
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
          </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <!-- End -->
  </body>
  
  </html>`;
  return template;
};

export default GenerateAriticle;
