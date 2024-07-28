import { uploadPhoto, createUser } from 'utils.js'

export default function handleProfileSignup() {
  uploadPhoto()
    .then((photo) => {
      console.log(photo.body);
    });

  createUser()
    .then((user) => {
      console.log(user.firstName);
      console.log(user.lastName);
    });
}
