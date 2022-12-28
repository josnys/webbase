import React from 'react';
import { usePage, useForm } from '@inertiajs/inertia-react';
import { TextInputSimple, TextAreaSimple } from '@/Shared/Inputs';
import { ButtonSubmitSimple, ButtonLinkSimple } from '@/Shared/Buttons';
import { createSlug } from '@/utils';
import FlashMessages from '@/Shared/FlashMessages';

const RoleForm = () => {
     const { info } = usePage().props;
     const { data, setData, put, post, processing, reset, errors } = useForm({
          id: info.id || null,
          name: info.name || '',
          display: info.display || '',
          description: info.description || '',
     });

     let save_caption = info.id ? 'Save Changes' : 'Save';

     function handleFocusOut(e) {
          const value = e.target.value;
          if(!data.id){
               setData('name', createSlug(value));
          }
          return;
     }

     function handleSubmit(e) {
          e.preventDefault();
          if(data.id){
               put(route('admin.role.update', info.id), {
                    onSuccess: () => reset()
               });
          }else{
               post(route('admin.role.store'), {
                    onSuccess: () => reset()
               });
          }
     }

     return (
          <form onSubmit={handleSubmit}>
               <div className="px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-3 gap-3">
                         <div className="col-span-12 text-right">
                              <ButtonLinkSimple caption={'Back'} icon="back" link={'admin.security.index'} linkParams={''} />
                         </div>
                         <div className="items-center col-span-12">
                              <FlashMessages />
                         </div>
                         <div className="col-span-12">
                              <TextInputSimple
                                   className="block w-full"
                                   label="Display Name"
                                   name="display"
                                   type="text"
                                   placeholder="Administrator"
                                   disable={false}
                                   readonly={false}
                                   must={true}
                                   focus={true}
                                   errors={errors.display}
                                   value={data.display}
                                   onChange={e => setData('display', e.target.value)}
                                   onBlur={handleFocusOut}
                              />
                              <TextInputSimple
                                   className="block w-full mt-4"
                                   label="Name"
                                   name="name"
                                   type="text"
                                   placeholder="administrator"
                                   disable={false}
                                   readonly={true}
                                   must={false}
                                   errors={errors.name}
                                   value={data.name}
                                   onChange={e => setData('name', e.target.value)}
                              />
                              <TextAreaSimple
                                   className="block w-full mt-4"
                                   label="Description"
                                   name="description"
                                   placeholder="Write a description to the role"
                                   errors={errors.description}
                                   value={data.description}
                                   onChange={e => setData('description', e.target.value)}
                              />
                         </div>
                    </div>
               </div>
               <div className="flex items-center justify-end px-4 py-3 text-right rounded-b bg-slate-100 sm:px-6">
                    <ButtonSubmitSimple caption={save_caption} loading={processing} icon={null} />
               </div>
          </form>
     );
}

export default RoleForm;