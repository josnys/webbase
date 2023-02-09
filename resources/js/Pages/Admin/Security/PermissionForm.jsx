import React from 'react';
import { usePage, useForm, Head } from '@inertiajs/react';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';
import { TextInputSimple, TextAreaSimple } from '@/Shared/Inputs';
import { ButtonSubmitSimple, ButtonLinkSimple } from '@/Shared/Buttons';
import { createSlug } from '@/utils';
import FlashMessages from '@/Shared/FlashMessages';

const PermissionForm = () => {
     const { info } = usePage().props;
     const { data, setData, post, put, processing, reset, errors } = useForm({
          id: info.id || null,
          name: info.name || '',
          display: info.display || '',
          description: info.description || '',
     });

     let title = info.id ? 'Edit Permission' : 'Create Permission';
     let back_btn = info.id ? 'admin.security.index' : 'admin.security.index';
     let save_caption = info.id ? 'Save Changes' : 'Save';

     function handleFocusOut(e) {
          const value = e.target.value;
          setData('name', createSlug(value));
     }

     function handleSubmit(e) {
          e.preventDefault();
          if(data.id){
               put(route('admin.permission.update', info.id));
          }else{
               post(route('admin.permission.store'), {
                    onSuccess: () => reset()
               });
          }
     }

     return (
          <React.Fragment key="permission-c">
               <Head>
                    <title>{title}</title>
               </Head>
               <ProfileCard>
                    <div className="md:col-span-1">
                         <div className="px-4 sm:px-0">
                              <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                              <p className="mt-1 text-sm text-gray-600">
                                   Use the form to add/edit permissions to the system. These permissions will be used to grant access to all system's functionalities
                              </p>
                         </div>
                    </div>
                    <DataCard>
                         <form onSubmit={handleSubmit}>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-3 gap-3">
                                        <div className="col-span-12 text-right">
                                             {data.id && (<ButtonLinkSimple caption={'Back'} icon="back" link={back_btn} linkParams={''} />)}
                                             {!data.id && (<ButtonLinkSimple caption={'Back'} icon="back" link={back_btn} linkParams={''} />)}
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
                    </DataCard>
               </ProfileCard>
          </React.Fragment>
     );
}

export default PermissionForm;
