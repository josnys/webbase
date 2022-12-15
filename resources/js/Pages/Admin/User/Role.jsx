import React from 'react';
import { usePage, useForm } from '@inertiajs/inertia-react';
import AdminLayout from '@/Shared/AdminLayout';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';
import { CheckInput } from '@/Shared/Inputs';
import { ButtonSubmitSimple, ButtonLinkSimple } from '@/Shared/Buttons';

function Role() {
     const { auth, info } = usePage().props;
     const { data, setData, post, processing, errors } = useForm({
          user_roles: info.user_roles || [],
          checkAll: false,
          checkAllCaption: 'Select All',
     });

     function handleChange(e) {
          const key = e.target.name;
          const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
          const _data = parseInt(e.target.value);
          for(var i = 0; i < data.user_roles.length; i++){
               if(data.user_roles[i].id == _data){
                    data.user_roles[i].checked = value;
                    break;
               }
          }
          for(var i = 0; i < info.roles.length; i++){
               if(info.roles[i].id == _data){
                    info.roles[i].isCheck = value;
                    break;
               }
          }
          let perms = data.user_roles;
          if(perms.indexOf(_data) != -1){
               perms.splice(perms.indexOf(_data), 1);
          }else{
               perms.push(_data);
          }
          setData('user_roles', perms);
     }

     function handleAll(e){
          const key = e.target.name;
          const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
          let perms = [];
          let caption = (value) ? 'Unselect All' : 'Select All';
          for(var i = 0; i < info.roles.length; i++){
               if(value){
                    perms.push(info.roles[i].id);
               }
               info.roles[i].isCheck = value;
          }
          if(!value){
               perms = [];
          }
          setData('user_roles', perms);
          setData('checkAllCaption', caption);
     }

     function handleSubmit(e) {
          e.preventDefault();
          post(route('admin.user.post.role', info.user.id));
     }

     return (
          <React.Fragment key="assign-perms">
               <ProfileCard>
                    <div className="md:col-span-1">
                         <div className="px-4 sm:px-0">
                              <h3 className="font-medium text-gray-900 text-md">Assign Role to User :</h3>
                              <h3 className="mt-3 text-lg font-medium text-gray-700">{info.user.name}</h3>
                              <p className="mt-1 text-sm text-gray-600">
                                   Assigning roles to user will provide them with ability to manage different aspect of the business
                              </p>
                         </div>
                    </div>
                    <DataCard>
                         <form onSubmit={handleSubmit}>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-3">
                                        <div className="col-span-12 text-right">
                                             <ButtonLinkSimple caption={'Back'} icon="back" link={'admin.user.index'} linkParams={''} />
                                        </div>
                                        <div className="sm:col-span-4">
                                             <div className="flex mt-4">
                                                  <CheckInput className="" label={data.checkAllCaption} checked={data.chekcAll} onChange={handleAll} />
                                             </div>
                                             <ul className="h-64 pt-2 mt-2 overflow-auto list-none">
                                                  {info.roles.map(({id, display, description, isCheck}) => {
                                                       return <li key={id} className={`p-2 mt-2 rounded hover:bg-gray-200 hover:shadow-md ${(isCheck?'bg-blue-200':'')}`}>
                                                            <CheckInput className="" value={id} label={display} checked={isCheck} onChange={handleChange} />
                                                            <p className="pl-6 text-sm text-gray-500">{description}</p>
                                                       </li>
                                                  })}
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                              <div className="flex items-center justify-end px-4 py-3 text-right rounded-b bg-slate-100 sm:px-6">
                                   <ButtonSubmitSimple caption="Assign Roles" loading={processing} icon={null} />
                              </div>
                         </form>
                    </DataCard>
               </ProfileCard>
          </React.Fragment>
     );
}

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Role.layout = page => <AdminLayout children={page} header={'Assign Role'} />;

export default Role;
