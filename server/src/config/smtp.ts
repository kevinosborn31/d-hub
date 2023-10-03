const {
    SMTP_HOST: host,
    SMTP_PORT: port,
    SMTP_USER: user, 
    SMTP_PASS: pass,
} = process.env;

export default { 
    host,
    port: Number(port),
    secure: false,
    auth: {
        user,
        pass
    }
}