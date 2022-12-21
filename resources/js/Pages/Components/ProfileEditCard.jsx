import React from 'react';
import { usePage, useForm, Link } from '@inertiajs/inertia-react';
import { ButtonSubmitSimple } from '@/Shared/Buttons';
import { TextInputSimple, SelectInputSimple, FileInputShowImage } from '@/Shared/Inputs';
import FlashMessages from '@/Shared/FlashMessages';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';

const ProfileEditCard = () => {
     const { auth, user, info } = usePage().props;
     const { data, setData, put, processing, errors, transform } = useForm({
          fname: user.data.person.firstname || '',
          lname: user.data.person.lastname || '',
          dob: user.data.person.dob || '',
          sex: user.data.person.sex || '',
          identification: user.data.person.gov_id.number || '',
          identificationType: user.data.person.gov_id.type || '',
          phone: user.data.person.phone || '',
          address: user.data.person.address || '',
          username: user.data.username || '',
          current_username: user.data.username || '',
          email: user.data.email || '',
          current_email: user.data.email || '',
          avatar: null,
          selectedAvatar: null,
          currentAvatar: user.data.person.avatar,
     });

     function handleFileChange(file, path) {
          setData('selectedAvatar', path);
          setData('avatar', file);
     }

     function handleSubmit(e) {
          e.preventDefault();
          put(route('user.profile.save', user.data.id));
     }
     return (
          <React.Fragment key="uprofile">
               <ProfileCard>
                    <div className="md:col-span-1">
                         <div className="px-4 sm:px-0">
                              <h3 className="text-lg font-medium text-slate-900">Profile Information</h3>
                              <p className="mt-1 text-sm text-slate-600">
                                   Update your account's profile information and email address. You may change your password <Link href={route('user.password.edit')} className="font-semibold hover:underline">here.</Link>
                              </p>
                              <div className="w-full mt-3">
                                   <h3 className="text-center text-slate-700 text-md">Current Photo</h3>
                                   {!user.currentAvatar && (<img src={`https://ui-avatars.com/api/?name=${auth.user.name}&amp;color=7F9CF5&amp;background=EBF4FF`} className="w-20 h-20 mx-auto rounded-full" />)}
                                   {user.currentAvatar && (<img src={`${user.currentAvatar}`} className="w-20 h-20 mx-auto rounded-full" />)}
                              </div>
                         </div>
                    </div>
                    <DataCard>
                         <FlashMessages />
                         <form onSubmit={handleSubmit}>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-12">
                                        <div className="col-span-12">
                                             <label className="block text-sm font-medium text-slate-700" htmlFor="avatar">
                                                  <span>Avatar {data.selectedAvatar}</span>
                                             </label>
                                             <div className="mt-2">
                                                  {data.selectedAvatar && (<img src={`${data.selectedAvatar}`} className="w-20 h-20 rounded-full" />)}
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
                                                  className="block w-full mt-4"
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
                                                  label="Username"
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
                                                  label="E-mail"
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
                              <div className="flex items-center justify-end px-4 py-3 text-right rounded-b bg-slate-100 sm:px-6">
                                   <ButtonSubmitSimple caption="Save" loading={processing} icon={null} />
                              </div>
                         </form>
                    </DataCard>
               </ProfileCard>
          </React.Fragment>
     );
};

export default ProfileEditCard;
