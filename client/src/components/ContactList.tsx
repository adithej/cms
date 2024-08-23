import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getAllContact } from '../helpers/apis/contact-apis'
import { Contact } from '../helpers/types/contact-types'

const ContactList: React.FC = () => {
  const {
    data: contacts,
    isLoading,
    isError,
  } = useQuery<Contact[]>({
    queryKey: ['contacts'],
    queryFn: getAllContact,
  })

  return (
    <div className='w-full max-w-full md:max-w-[90%] bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='text-lg leading-6 font-medium text-gray-900 font-palanquin'>
          Contacts
        </h3>
      </div>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50 font-montserrat'>
            <tr>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Name
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Age
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Email
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                IsActive
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200 font-palanquin'>
            {isLoading && (
              <tr>
                <td colSpan={5} className='px-6 py-4 text-center'>
                  <div className='text-sm text-gray-500'>Loading...</div>
                </td>
              </tr>
            )}
            {isError && (
              <tr>
                <td colSpan={5} className='px-6 py-4 text-center'>
                  <div className='text-sm text-red-500'>
                    Error loading contacts.
                  </div>
                </td>
              </tr>
            )}
            {!isLoading &&
              !isError &&
              contacts?.map(contact => (
                <tr key={contact.id} className='hover:bg-gray-50'>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm font-medium text-gray-900'>
                      {contact.name}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-500'>{contact.age}</div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-500'>{contact.email}</div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-500'>
                      {contact.active ? 'yes' : 'no'}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                    <Link
                      to={`/contact/${contact.id}`}
                      className='text-indigo-600 hover:text-indigo-900'
                    >
                      Edit/Delete
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {!isLoading && !isError && contacts?.length === 0 && (
        <div className='text-center py-4 text-gray-500 font-palanquin'>
          No contacts found.
        </div>
      )}
    </div>
  )
}

export default ContactList
