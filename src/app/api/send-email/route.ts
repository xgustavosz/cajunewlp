import { NextResponse } from "next/server";
import nodemailer, { Transporter } from "nodemailer";

export async function POST(req: Request) {
  try {
    const { nome, email, telefone, mensagem } = await req.json();

    const transporter: Transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER as string,
        pass: process.env.EMAIL_PASS as string,
      },
    });

    await transporter.sendMail({
      from: `"Formulário CAJU" <${process.env.EMAIL_USER}>`,
      to: "gugassilva2000@gmail.com",
      subject: "Novo contato do site CAJU",
      text: `
        Nome: ${nome}
        Email: ${email}
        Telefone: ${telefone}
        Mensagem: ${mensagem}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
