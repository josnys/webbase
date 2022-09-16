import React, { useState } from 'react';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import { ButtonSubmitSimple, ButtonLinkSimple } from '@/Shared/Buttons';
import { TextInputSimple, CheckInput, SelectInputSimple, FileInputShowImage } from '@/Shared/Inputs';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';
import {toFormData} from '@/utils';

const ProfileEditCard = () => {
     const { auth, user, info } = usePage().props;
     const { data, setData, post, processing, errors, transform } = useForm({
          fname: user.fname || '',
          lname: user.lname || '',
          dob: user.dob || '',
          sex: user.sex || '',
          identification: user.identification || '',
          identificationType: user.identificationType || '',
          phone: user.phone || '',
          address: user.address || '',
          username: user.username || '',
          current_username: user.username || '',
          email: user.email || '',
          avatar: null,
          selectedAvatar: null,
          currentAvatar: user.avatar,
          current_email: user.email || '',
     });

     function handleFileChange(file, path) {
          setData('selectedAvatar', path);
          setData('avatar', file);
     }

     function handleSubmit(e) {
          e.preventDefault();
          post(route('profile.save', user.id));
     }
     return (
          <React.Fragment key="uprofile">
               <ProfileCard>
                    <div className="md:col-span-1">
                         <div className="px-4 sm:px-0">
                              <h3 className="text-lg font-medium text-gray-900">Profile Information</h3>
                              <p className="mt-1 text-sm text-gray-600">
                                   Update your account's profile information and email address.
                              </p>
                              <div className="w-full mt-3">
                                   <h3 className="text-md text-center text-gray-700">Current Photo</h3>
                                   {!user.currentAvatar && (<img src={`https://ui-avatars.com/api/?name=${auth.user.name}&amp;color=7F9CF5&amp;background=EBF4FF`} className="mx-auto rounded-full h-20 w-20" />)}
                                   {user.currentAvatar && (<img src={`${user.currentAvatar}`} className="mx-auto rounded-full h-20 w-20" />)}
                              </div>
                         </div>
                    </div>
                    <DataCard>
                         <form onSubmit={handleSubmit}>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-12">
                                        <div className="col-span-12">
                                             <label className="block font-medium text-sm text-gray-700" htmlFor="avatar">
                                                  <span>Avatar {data.selectedAvatar}</span>
                                             </label>
                                             <div className="mt-2">
                                                  {data.selectedAvatar && (<img src={`${data.selectedAvatar}`} className="rounded-full h-20 w-20" />)}
                                             </div>
                                             <FileInputShowImage
                                                  className="w-full lg:w-1/2"
                                                  label="Select Image"
                                                  name="avatar"
                                                  accept="image/.jpg,.jpeg,.png"
                                                  errors={errors.avatar}
                                                  value={data.avatar}
                                                  onChange={handleFileChange}
                                              />
                                              <TextInputSimple
                                                  className="mt-4 block w-full"
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
                                   <ButtonSubmitSimple caption="Save" loading={processing} icon={null} />
                              </div>
                         </form>
                    </DataCard>
               </ProfileCard>
          </React.Fragment>
     );
};

export default ProfileEditCard;
