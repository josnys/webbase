import React, { useState } from 'react';
import { InertiaLink, usePage, useForm, Head } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Admin/Layout';
import FileInput from '@/Shared/FileInput';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';
import { ButtonSubmitSimple, ButtonLinkSimple } from '@/Shared/Buttons';
import { TextInputSimple, TextInputIcon, CheckInput, SelectInputSimple } from '@/Shared/Inputs';
import Icon from '@/Shared/Icon';
import classNames from 'classnames';

const Edit = () => {
     const { auth, info } = usePage().props;
     const { data, setData, put, processing, errors } = useForm({
          fname: info.fname || '',
          lname: info.lname || '',
          code: info.code || '',
          dob: info.dob || '',
          sex: info.sex || '',
          identification: info.identification || '',
          identificationType: info.identificationType || '',
          address: info.address || '',
          phone: info.phone || '',
          username: info.username || '',
          email: info.email || '',
          avatar: info.avatar
     });

     const iconClasses = classNames('w-4 h-4 mr-2', {
          'text-white fill-current': false,
          'text-gray-500 hover:text-white fill-current': true
     });

     function handleSubmit(e) {
          e.preventDefault();
          put(route('user.update', info.id));
     }

     return (
          <React.Fragment key="uprofile">
               <Head>
                    <title>Edit User</title>
               </Head>
               <ProfileCard>
                    <div className="md:col-span-1">
                         <div className="px-4 sm:px-0">
                              <h3 className="text-lg font-medium text-gray-900">Edit User</h3>
                              <p className="mt-1 text-sm text-gray-600">
                                   Edit user's personal informations
                              </p>
                         </div>
                    </div>
                    <DataCard>
                         <form onSubmit={handleSubmit}>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-12 text-right">
                                             <ButtonLinkSimple caption={'Back'} icon="back" link={'user.index'} linkParams={''} />
                                        </div>
                                        <div className="col-span-12">
                                             <TextInputSimple
                                                  className="block w-full"
                                                  label="First Name"
                                                  name="fname"
                                                  type="text"
                                                  placeholder="John"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  focus={true}
                                                  errors={errors.fname}
                                                  value={data.fname}
                                                  onChange={e => setData('fname', e.target.value)}
                                             />
                                             <TextInputSimple
                                                  className="mt-4 block w-full"
                                                  label="Last Name"
                                                  name="lname"
                                                  type="text"
                                                  placeholder="Doe"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.lname}
                                                  value={data.lname}
                                                  onChange={e => setData('lname', e.target.value)}
                                             />
                                             <TextInputSimple
                                                  className="mt-4 block w-full"
                                                  label="Date of Birth"
                                                  name="dob"
                                                  type="date"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.dob}
                                                  value={data.dob}
                                                  onChange={e => setData('dob', e.target.value)}
                                             />
                                             <SelectInputSimple
                                                  className="mt-4 block w-full"
                                                  label="Sex"
                                                  name="sex"
                                                  must={true}
                                                  errors={errors.sex}
                                                  value={data.sex}
                                                  onChange={e => setData('sex', e.target.value)}
                                                  >
                                                  <option value={''}>Choose Sex</option>
                                                  {info.sexes.map(({code, name}, i) => {
                                                       return <option key={code} value={code}>{name}</option>
                                                  })}
                                             </SelectInputSimple>
                                             <SelectInputSimple
                                                  className="mt-4 block w-full"
                                                  label="Identity Type"
                                                  name="identificationType"
                                                  must={true}
                                                  errors={errors.identificationType}
                                                  value={data.identificationType}
                                                  onChange={e => setData('identificationType', e.target.value)}
                                                  >
                                                  <option value={''}>Choose Identity Type</option>
                                                  {info.identityType.map(({code, name}, i) => {
                                                       return <option key={code} value={code}>{name}</option>
                                                  })}
                                             </SelectInputSimple>
                                             <TextInputSimple
                                                  className="mt-4 block w-full"
                                                  label="Identity Number"
                                                  name="identification"
                                                  type="text"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.identification}
                                                  value={data.identification}
                                                  onChange={e => setData('identification', e.target.value)}
                                             />
                                             <TextInputSimple
                                                  className="mt-4 block w-full"
                                                  label="Userame"
                                                  name="username"
                                                  type="text"
                                                  placeholder="jdoe"
                                                  disable={false}
                                                  readonly={false}
                                                  errors={errors.username}
                                                  value={data.username}
                                                  onChange={e => setData('username', e.target.value)}
                                             />
                                             <TextInputSimple
                                                  className="mt-4 block w-full"
                                                  label="Email"
                                                  name="email"
                                                  type="email"
                                                  placeholder="jdoe@app.com"
                                                  disable={false}
                                                  readonly={false}
                                                  errors={errors.email}
                                                  value={data.email}
                                                  onChange={e => setData('email', e.target.value)}
                                             />
                                             <TextInputSimple
                                                  className="mt-4 block w-full"
                                                  label="Phone Number"
                                                  name="phone"
                                                  type="text"
                                                  placeholder="999-9999-9999"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.phone}
                                                  value={data.phone}
                                                  onChange={e => setData('phone', e.target.value)}
                                             />
                                             <TextInputSimple
                                                  className="mt-4 block w-full"
                                                  label="Address"
                                                  name="address"
                                                  type="text"
                                                  placeholder="Path your home"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.address}
                                                  value={data.address}
                                                  onChange={e => setData('address', e.target.value)}
                                             />
                                        </div>
                                   </div>
                              </div>
                              <div className="flex items-center justify-end px-4 py-3 bg-slate-100 text-right sm:px-6 rounded-b">
                                   <ButtonSubmitSimple caption="Update" loading={processing} icon={null} />
                              </div>
                         </form>
                    </DataCard>
               </ProfileCard>
          </React.Fragment>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Edit.layout = page => <Layout children={page} header={'Edit User'} />;

export default Edit;
