import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

type FormData = {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
};

export default function Contato() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    await new Promise((res) => setTimeout(res, 600));
    console.log('Contato enviado:', data);
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <section className="min-h-screen px-6 py-12 flex items-start justify-center">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Contato</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome *</label>
            <input {...register('nome', { required: 'Nome é obrigatório', minLength: { value: 3, message: 'Nome curto demais' } })} className="mt-1 block w-full border rounded-md p-2" />
            {errors.nome && <p className="text-sm text-red-600 mt-1">{errors.nome.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email *</label>
            <input {...register('email', { required: 'Email é obrigatório', pattern: { value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/, message: 'Email inválido' } })} className="mt-1 block w-full border rounded-md p-2" />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Assunto *</label>
            <input {...register('assunto', { required: 'Assunto é obrigatório' })} className="mt-1 block w-full border rounded-md p-2" />
            {errors.assunto && <p className="text-sm text-red-600 mt-1">{errors.assunto.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Mensagem *</label>
            <textarea {...register('mensagem', { required: 'Mensagem é obrigatória', minLength: { value: 10, message: 'Escreva pelo menos 10 caracteres' } })} rows={5} className="mt-1 block w-full border rounded-md p-2" />
            {errors.mensagem && <p className="text-sm text-red-600 mt-1">{errors.mensagem.message}</p>}
          </div>

          <div className="flex items-center justify-between">
            <button type="submit" disabled={isSubmitting} className="bg-blue-700 text-white px-4 py-2 rounded-md shadow hover:bg-blue-800">
              {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
            </button>
            {isSubmitSuccessful && <span className="text-sm text-green-600">Mensagem enviada!</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
