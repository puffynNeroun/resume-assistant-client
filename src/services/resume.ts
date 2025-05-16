import axios from 'axios'
import { resumeSchema } from '@/lib/validators/resumeSchema'
import { z } from 'zod'

const API = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
})

export type ResumeFormData = z.infer<typeof resumeSchema>

export const getResumes = async (): Promise<ResumeFormData[]> => {
    const res = await API.get('/resume')
    return res.data
}

export const getResumeById = async (id: string): Promise<ResumeFormData> => {
    const res = await API.get(`/resume/${id}`)
    return res.data
}

export const createResume = async (data: ResumeFormData): Promise<ResumeFormData> => {
    const res = await API.post('/resume', data)
    return res.data
}

export const updateResume = async (
    id: string,
    data: ResumeFormData
): Promise<ResumeFormData> => {
    const res = await API.put(`/resume/${id}`, data)
    return res.data
}

export const deleteResume = async (id: string): Promise<{ message: string }> => {
    const res = await API.delete(`/resume/${id}`)
    return res.data
}
