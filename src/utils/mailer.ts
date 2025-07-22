import nodemailer from "nodemailer";

class MailerService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "pawel.sowinski.career@gmail.com",
        pass: "afgm przk fjin zdsy",
      },
    });
  }

  async sendEmail(
    from: string,
    name: string,
    surname: string,
    subject: string,
    text: string,
    preferredTime: string,
    contactMethod: string
  ) {
    try {
      const htmlContent = `
        <!DOCTYPE html>
        <html lang="pl">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nowa wiadomość kontaktowa</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
            }
            .email-container {
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
              overflow: hidden;
            }
            .header {
              background: linear-gradient(135deg, #8a7e56 0%, #7b7451 100%);
              color: white;
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 300;
              letter-spacing: 1px;
            }
            .content {
              padding: 30px;
            }
            .info-section {
              margin-bottom: 25px;
            }
            .info-section h2 {
              color: #8a7e56;
              font-size: 18px;
              margin-bottom: 15px;
              border-bottom: 2px solid #f0f0f0;
              padding-bottom: 8px;
            }
            .info-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
              margin-bottom: 20px;
            }
            .info-item {
              background-color: #f8f9fa;
              padding: 15px;
              border-radius: 6px;
              border-left: 4px solid #8a7e56;
            }
            .info-label {
              font-weight: 600;
              color: #555;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 5px;
            }
            .info-value {
              color: #333;
              font-size: 16px;
            }
            .message-section {
              background-color: #f8f9fa;
              padding: 20px;
              border-radius: 6px;
              border: 1px solid #e9ecef;
            }
            .message-label {
              font-weight: 600;
              color: #555;
              margin-bottom: 10px;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .message-content {
              color: #333;
              line-height: 1.8;
              white-space: pre-wrap;
            }
            .footer {
              background-color: #f8f9fa;
              padding: 20px 30px;
              text-align: center;
              border-top: 1px solid #e9ecef;
              color: #666;
              font-size: 14px;
            }
            .timestamp {
              color: #999;
              font-size: 12px;
              margin-top: 10px;
            }
            @media (max-width: 600px) {
              .info-grid {
                grid-template-columns: 1fr;
              }
              .content {
                padding: 20px;
              }
              .header {
                padding: 20px;
              }
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <h1>Nowa wiadomość kontaktowa</h1>
            </div>
            
            <div class="content">
              <div class="info-section">
                <h2>Dane kontaktowe</h2>
                <div class="info-grid">
                  <div class="info-item">
                    <div class="info-label">Imię i nazwisko</div>
                    <div class="info-value">${name} ${surname}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Email</div>
                    <div class="info-value">${from}</div>
                  </div>
                </div>
              </div>
              
              <div class="info-section">
                <h2>Preferencje kontaktu</h2>
                <div class="info-grid">
                  <div class="info-item">
                    <div class="info-label">Preferowany czas</div>
                    <div class="info-value">${
                      preferredTime === "morning"
                        ? "Rano (do godziny 16:00)"
                        : preferredTime === "evening"
                        ? "Wieczorem (od godziny 16:00)"
                        : preferredTime
                    }</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Sposób kontaktu</div>
                    <div class="info-value">${
                      contactMethod === "phone"
                        ? "Telefon"
                        : contactMethod === "email"
                        ? "E-mail"
                        : contactMethod
                    }</div>
                  </div>
                </div>
              </div>
              
              <div class="info-section">
                <h2>Wiadomość</h2>
                <div class="message-section">
                  <div class="message-label">Treść wiadomości</div>
                  <div class="message-content">${text}</div>
                </div>
              </div>
            </div>
            
            <div class="footer">
              <div>Wiadomość została wysłana z formularza kontaktowego</div>
              <div class="timestamp">Data wysłania: ${new Date().toLocaleString(
                "pl-PL",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }
              )}</div>
            </div>
          </div>
        </body>
        </html>
      `;

      await this.transporter.sendMail({
        from,
        to: "pawel.sowinski.career@gmail.com",
        subject,
        text,
        html: htmlContent,
      });
    } catch (error) {
      console.error(error);
      throw new Error("Failed to send email");
    }
  }
}

export const mailerService = new MailerService();
