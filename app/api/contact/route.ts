import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Assunto é obrigatório'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  consent: z.boolean().refine(val => val === true, 'Você deve concordar com a política de privacidade'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Create support ticket
    // 4. Send confirmation email to user
    
    return NextResponse.json({
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      data: {
        id: `MSG-${Date.now()}`,
        timestamp: new Date().toISOString(),
        subject: validatedData.subject,
      },
    });
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Dados inválidos',
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }
    
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: 'Erro interno do servidor. Tente novamente mais tarde.',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Contact API endpoint',
    methods: ['POST'],
    schema: {
      name: 'string (required, min 2 chars)',
      email: 'string (required, valid email)',
      phone: 'string (optional)',
      subject: 'string (required)',
      message: 'string (required, min 10 chars)',
      consent: 'boolean (required, must be true)',
    },
  });
}
