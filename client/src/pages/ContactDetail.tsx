import React, { useState, useEffect } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { Sidebar } from '../components'
import Button from '../components/ui/Button'
import { useParams, useNavigate } from 'react-router-dom'
import { Contact } from '../helpers/types/contact-types'
import {
  getSingleContact,
  editContact,
  deleteContact,
} from '../helpers/apis/contact-apis'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

const ContactDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const [formData, setFormData] = useState<Contact | null>(null)
  const [error, setError] = useState<string | null>(null)

  const {
    data: contact,
    isLoading,
    isError,
  } = useQuery<Contact>({
    queryKey: ['contact', id],
    queryFn: () => getSingleContact(id!),
    enabled: !!id,
  })

  useEffect(() => {
    if (contact && !formData) {
      setFormData(contact)
    }
  }, [contact, formData])

  const { mutate: edit, isPending: isEditing } = useMutation({
    mutationFn: editContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact', id] })
      navigate('/contact')
    },
    onError: (error: any) => {
      setError(`Error updating contact: ${error.message}`)
    },
  })

  const { mutate: remove, isPending: isDeleting } = useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      navigate('/contact')
    },
    onError: (error: any) => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
      setError(`Error deleting contact: ${error.message}`)
    },
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    if (formData) {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  }

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    if (id && formData) {
      edit(formData)
    }
  }

  const handleDelete = () => {
    if (id) {
      remove(id)
    }
  }

  if (isLoading) return <div>Loading...</div>
  if (isError || !contact) return <div>Error loading contact data</div>
  if (!formData) return <div>No contact data available</div>

  return (
    <main className='flex-grow grid grid-cols-1 md:grid-cols-[15%_85%] h-dvh'>
      <section className='hidden md:block'>
        <Sidebar />
      </section>
      <section className='bg-stone-300 flex flex-col pl-[10%] pt-6'>
        <div className='w-[70%] h-[85%] p-5 bg-neutral-200 shadow-lg rounded-lg overflow-auto flex flex-col'>
          <div className='flex justify-between'>
            <h1 className='text-2xl font-palanquin font-bold mb-4'>
              Edit Details
            </h1>
            <Button
              primary
              className='px-3'
              onClick={() => navigate('/contact')}
            >
              <FaChevronLeft size={25} />
            </Button>
          </div>
          {error && <div className='text-red-500 mb-4'>{error}</div>}
          <form
            onSubmit={handleUpdate}
            className='flex flex-col gap-4 font-montserrat'
          >
            <div className='flex gap-4'>
              <div className='flex-1'>
                <label htmlFor='name' className='block mb-1'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData?.name || ''}
                  onChange={handleChange}
                  placeholder='Enter your name'
                  className='w-full p-2 rounded border'
                />
              </div>
              <div className='flex-1'>
                <label htmlFor='age' className='block mb-1'>
                  Age
                </label>
                <input
                  type='number'
                  id='age'
                  name='age'
                  value={formData?.age || ''}
                  onChange={handleChange}
                  placeholder='Enter your age'
                  className='w-full p-2 rounded border'
                />
              </div>
            </div>

            <div>
              <label htmlFor='email' className='block mb-1'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData?.email || ''}
                onChange={handleChange}
                placeholder='Enter your email'
                className='w-full p-2 rounded border'
              />
            </div>

            <div className='flex gap-4'>
              <div className='flex-1'>
                <label htmlFor='sex' className='block mb-1'>
                  Sex
                </label>
                <select
                  id='sex'
                  name='sex'
                  value={formData?.sex || ''}
                  onChange={handleChange}
                  className='w-full p-2 rounded border'
                >
                  <option value=''>Select</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                  <option value='prefer_not_to_say'>Prefer not to say</option>
                </select>
              </div>

              <div className='flex-1'>
                <label htmlFor='active' className='block mb-1'>
                  IsActive
                </label>
                <select
                  id='active'
                  name='active'
                  value={formData?.active}
                  onChange={handleChange}
                  className='w-full p-2 rounded border'
                >
                  <option value=''>Select</option>
                  <option value='true'>Yes</option>
                  <option value='false'>No</option>
                </select>
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='flex-1'>
                <label htmlFor='city' className='block mb-1'>
                  City
                </label>
                <input
                  type='text'
                  id='city'
                  name='city'
                  value={formData?.city || ''}
                  onChange={handleChange}
                  placeholder='Enter your city'
                  className='w-full p-2 rounded border'
                />
              </div>
              <div className='flex-1'>
                <label htmlFor='state' className='block mb-1'>
                  State
                </label>
                <input
                  type='text'
                  id='state'
                  name='state'
                  value={formData?.state || ''}
                  onChange={handleChange}
                  placeholder='Enter your state'
                  className='w-full p-2 rounded border'
                />
              </div>
            </div>

            <div>
              <label htmlFor='pin' className='block mb-1'>
                PIN
              </label>
              <input
                type='text'
                id='pin'
                name='pin'
                value={formData?.pin || ''}
                onChange={handleChange}
                placeholder='Enter your PIN'
                className='w-full p-2 rounded border'
              />
            </div>
            <div className='flex gap-3 justify-end'>
              <Button
                warning
                type='submit'
                className='p-4 mt-3 w-20'
                disabled={isEditing}
              >
                {isEditing ? 'Saving...' : 'Save'}
              </Button>
              <Button
                danger
                onClick={handleDelete}
                className='p-4 mt-3'
                disabled={isDeleting}
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default ContactDetail
