import { sendEmail } from "../controllers/email-controller"
import { verificationEmailTemplate } from "../templates/verificationEmailTemplate"

export const sendVerificationEmail = (email: string) => {
    sendEmail(email, 'Verify your account', 'test@test.com', verificationEmailTemplate)
}