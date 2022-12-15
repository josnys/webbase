import React from 'react';
import { useForm, usePage, Head } from '@inertiajs/inertia-react';
import AdminLayout from '@/Shared/AdminLayout';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';
import { CheckInput } from '@/Shared/Inputs';
import { ButtonSubmitSimple, ButtonLinkSimple } from '@/Shared/Buttons';

function AssignPermission() {
     const { auth, info } = usePage().props;
     const { data, setData, post, processing, errors } = useForm({
          role_permissions: info.role_permissions || [],
          checkAll: false,
          checkAllCaption: 'Select All',
     });

     function handleChange(e) {
          const key = e.target.name;
          const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
          const _data = parseInt(e.target.value);
          for(var i = 0; i < data.role_permissions.length; i++){
               if(data.role_permissions[i].id == _data){
                    data.role_permissions[i].checked = value;
                    break;
               }
          }
          for(var i = 0; i < info.permissions.length; i++){
               if(info.permissions[i].id == _data){
                    info.permissions[i].isCheck = value;
                    break;
               }
          }
          let perms = data.role_permissions;
          if(perms.indexOf(_data) != -1){
               perms.splice(perms.indexOf(_data), 1);
          }else{
               perms.push(_data);
          }
          setData('role_permissions', perms);
     }

     function handleAll(e){
          const key = e.target.name;
          const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
          let perms = [];
          let caption = (value) ? 'Unselect All' : 'Select All';
          for(var i = 0; i < info.permissions.length; i++){
               info.permissions[i].isCheck = value;
               perms = [...perms, info.permissions[i].id];
          }
          if(!value){
               perms = [];
          }
          setData('role_permissions', perms);
          setData('checkAllCaption', caption);
     }

     function handleSubmit(e) {
          e.preventDefault();
          post(route('admin.role.post.assign', info.role.id));
     }

     return (
          <React.Fragment key="assign-perms">
               <Head>
                    <title>Assign Permissions</title>
               </Head>
               <ProfileCard>
                    <div className="md:col-span-1">
                         <div className="px-4 sm:px-0">
                              <h3 className="font-medium text-gray-700 text-md">Assign Permissions to Role :</h3>
                              <h3 className="mt-3 text-lg font-medium text-gray-600">{info.role.display}</h3>
                              <p className="mt-1 text-sm text-gray-500">
                                   {info.role.description}
                              </p>
                         </div>
                    </div>
                    <DataCard>
                         <form onSubmit={handleSubmit}>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-3">
                                        <div className="col-span-12 text-right">
                                             <ButtonLinkSimple caption={'Back'} icon="back" link={'admin.security.index'} linkParams={''} />
                                        </div>
                                        <div className="sm:col-span-4">
                                             <div className="flex mt-4">
                                                  <CheckInput className="" label={data.checkAllCaption} checked={data.chekcAll} onChange={handleAll} />
                                             </div>
                                             <ul className="h-64 pt-2 mt-2 overflow-auto list-none">
                                                  {info.permissions.map(({id, display, description, isCheck}) => {
                                                       return <li key={id} className={`p-2 mt-2 rounded hover:bg-gray-200 hover:shadow-md ${(isCheck?'bg-blue-200':'')}`}>
                                                            <CheckInput className="" value={id} label={display} checked={isCheck} onChange={handleChange} />
                                                            <p className="pl-6 text-sm text-gray-500">{description}</p>
                                                       </li>
                                                  })}
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                              <div className="flex items-center justify-end px-4 py-3 text-right bg-gray-100 rounded-b sm:px-6">
                                   <ButtonSubmitSimple caption="Assign Permissions" loading={processing} icon={null} />
                              </div>
                         </form>
                    </DataCard>
               </ProfileCard>
          </React.Fragment>
     );
}

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
AssignPermission.layout = page => <AdminLayout children={page} header={'Assign Permissions'} />;

export default AssignPermission;
