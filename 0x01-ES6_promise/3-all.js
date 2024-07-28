import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  // Handle upload photo
  uploadPhoto()
    .then((photo) => {
      process.stdout.write(`${photo.body} `);
    });
  // Handle the create user
  createUser()
    .then((user) => {
      process.stdout.write(`${user.firstName} `);
      console.log(user.lastName);
    });
}
