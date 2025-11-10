// src/services/api.ts

/**
 * Este arquivo centraliza toda a comunicação com a API Java.
 * Ele usa a variável de ambiente definida no arquivo `.env`:
 * VITE_API_URL=http://localhost:8080
 */

const apiUrl = import.meta.env.VITE_API_URL

console.log("🌐 API Base URL:", apiUrl)

/**
 * Função GET genérica
 * Exemplo de uso:
 * const pacientes = await get<Paciente[]>("/api/pacientes")
 */
export async function get<T>(endpoint: string): Promise<T> {
  try {
    const res = await fetch(`${apiUrl}${endpoint}`)
    if (!res.ok) {
      throw new Error(`Erro ao buscar dados: ${res.status} ${res.statusText}`)
    }
    return await res.json()
  } catch (error) {
    console.error("Erro no GET:", error)
    throw error
  }
}

/**
 * Função POST genérica
 * Exemplo de uso:
 * await post("/api/pacientes", { nome: "João", email: "joao@email.com" })
 */
export async function post<T>(endpoint: string, data: any): Promise<T> {
  try {
    const res = await fetch(`${apiUrl}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (!res.ok) {
      throw new Error(`Erro ao enviar dados: ${res.status} ${res.statusText}`)
    }
    return await res.json()
  } catch (error) {
    console.error("Erro no POST:", error)
    throw error
  }
}

/**
 * Função PUT genérica (atualizar dados)
 * Exemplo:
 * await put("/api/pacientes/1", { nome: "Maria Atualizada" })
 */
export async function put<T>(endpoint: string, data: any): Promise<T> {
  try {
    const res = await fetch(`${apiUrl}${endpoint}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (!res.ok) {
      throw new Error(`Erro ao atualizar: ${res.status} ${res.statusText}`)
    }
    return await res.json()
  } catch (error) {
    console.error("Erro no PUT:", error)
    throw error
  }
}

/**
 * Função DELETE genérica
 * Exemplo:
 * await remove("/api/pacientes/1")
 */
export async function remove(endpoint: string): Promise<void> {
  try {
    const res = await fetch(`${apiUrl}${endpoint}`, {
      method: "DELETE",
    })
    if (!res.ok) {
      throw new Error(`Erro ao deletar: ${res.status} ${res.statusText}`)
    }
  } catch (error) {
    console.error("Erro no DELETE:", error)
    throw error
  }
}


