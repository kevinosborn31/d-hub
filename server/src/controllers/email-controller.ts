import axios from 'axios';
import smtpConfig from "../config/smtp";
import { validateEmailRequest } from '../utils/validateEmailRequest';
import nodemailer from "nodemailer";

export const sendEmail = async (recipients, subject, fromAddress, content) => {
    const transporter = nodemailer.createTransport(smtpConfig);

    validateEmailRequest(recipients, fromAddress);

    const email = {fromAddress, recipients, subject, content};

  try {
    const emailResult = await transporter.sendMail(email)

    return emailResult;
  } catch (error) {
    console.error(error);
  }
};