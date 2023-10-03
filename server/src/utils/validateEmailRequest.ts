const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

enum EmailErrorType {
  InvalidAddress = 'InvalidAddress',
}

class EmailError extends Error {
  constructor(type: EmailErrorType, { recipient, source }: { recipient?: string; source?: string }) {
    super(`Email Error: ${type}`);
    this.name = 'EmailError';
    this.type = type;
    this.recipient = recipient;
    this.source = source;
  }

  type: EmailErrorType;
  recipient?: string;
  source?: string;
}

export const validateEmailRequest = (recipients: string[], source: string) => {
  const isEmail = (text: string) => EMAIL_REGEX.test(text);

  recipients.forEach((recipient) => {
    if (!isEmail(recipient)) {
      throw new EmailError(EmailErrorType.InvalidAddress, { recipient });
    }
  });

  if (!isEmail(source)) {
    throw new EmailError(EmailErrorType.InvalidAddress, { source });
  }
};