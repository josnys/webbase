import React from 'react';
import { usePage, useForm, Head } from '@inertiajs/inertia-react';
import AdminLayout from '@/Shared/AdminLayout';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';
import { ButtonSubmitSimple, ButtonLinkSimple } from '@/Shared/Buttons';
import { TextInputSimple, SelectInputSimple } from '@/Shared/Inputs';
import Separator from '@/Shared/Admin/Separator';

const Create = () => {
     const { auth, info } = usePage().props;
     const { data, setData, post, processing, errors } = useForm({
          fname: '',
          lname: '',
          dob: '',
          sex: '',
          identification: '',
          identificationType: '',
          address: '',
          phone: '',
          username: '',
          email: '',
          password: '',
          password_confirmation: '',
          pin: ''
     });

     function handleSubmit(e) {
          e.preventDefault();
          post(route('admin.user.store'));
     }

     return (
          <React.Fragment key="uprofile">
               <Head>
                    <title>Create User</title>
               </Head>
               <form onSubmit={handleSubmit}>
                    <ProfileCard>
                         <div className="md:col-span-1">
                              <div className="px-4 sm:px-0">
                                   <h3 className="text-lg font-medium text-gray-900">Create User</h3>
                                   <p className="mt-1 text-sm text-gray-600">
                                        Create a new user to the system  by entering in this section all the new user personal information
                                   </p>
                              </div>
                         </div>
                         <DataCard>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-12 text-right">
                                             <ButtonLinkSimple caption={'Back'} icon="back" link={'admin.user.index'} linkParams={''} />
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
                                                  className="block w-full mt-4"
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
                                                  className="block w-full mt-4"
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
                                                  className="block w-full mt-4"
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
                                                  className="block w-full mt-4"
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
                                                  className="block w-full mt-4"
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
                                                  className="block w-full mt-4"
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
                                                  className="block w-full mt-4"
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
                                                  className="block w-full mt-4"
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
                                                  className="block w-full mt-4"
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
                         </DataCard>
                    </ProfileCard>
                    <Separator />
                    <ProfileCard>
                         <div className="md:col-span-1">
                              <div className="px-4 sm:px-0">
                                   <h3 className="text-lg font-medium text-gray-900">User Security</h3>
                                   <p className="mt-1 text-sm text-gray-600">
                                        In this section, allow the user to enter a password and a PIN number to access the system.
                                   </p>
                              </div>
                         </div>
                         <DataCard>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-4">
                                             <TextInputSimple
                                                  className="block w-full mt-4"
                                                  label="Password"
                                                  name="password"
                                                  type="password"
                                                  placeholder="****"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.password}
                                                  value={data.password}
                                                  onChange={e => setData('password', e.target.value)}
                                             />
                                             <TextInputSimple
                                                  className="block w-full mt-4"
                                                  label="Confirm Password"
                                                  name="password_confirmation"
                                                  type="password"
                                                  placeholder="****"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.password_confirmation}
                                                  value={data.password_confirmation}
                                                  onChange={e => setData('password_confirmation', e.target.value)}
                                             />
                                             <TextInputSimple
                                                  className="block w-full mt-4"
                                                  label="PIN"
                                                  name="pin"
                                                  type="text"
                                                  placeholder="1234"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.pin}
                                                  value={data.pin}
                                                  onChange={e => setData('pin', e.target.value)}
                                             />
                                        </div>
                                   </div>
                              </div>
                              <div className="flex items-center justify-end px-4 py-3 text-right rounded-b bg-slate-100 sm:px-6">
                                   <ButtonSubmitSimple caption="Save" loading={processing} icon={null} />
                              </div>
                         </DataCard>
                    </ProfileCard>
               </form>
          </React.Fragment>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Create.layout = page => <AdminLayout children={page} header={'Create User'} />;

export default Create;
