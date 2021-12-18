import { collection, addDoc, onSnapshot, doc } from "@firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { IProjectForm } from "../../models/interfaces";
import { db, storage } from "../firebase";

const uploadImage = (image: File) =>
  new Promise((res, rej) => {
    const storageRef = ref(storage, `/projects/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      'state_changed',
      (snapshot) => { },
      (err) => rej(err),
      () => getDownloadURL(uploadTask.snapshot.ref)
        .then(url => res(url))
    );
  });

const uploadImages = (images: File[]) =>
  images.map(uploadImage);

const getDownloadURLFromImages = async (images: File[]) => {
  const imagesPromise = uploadImages(images);
  const imagesResolved = await Promise.all(imagesPromise);
  return imagesResolved;
}

export const addProject = async (project: IProjectForm) => {
  const { images } = project;
  const imgsURL = await getDownloadURLFromImages(images).catch(console.log);

  const projectToUpload = {
    ...project,
    images: imgsURL,
  }

  await addDoc(collection(db, 'projects'), projectToUpload).catch(console.log);
}

export const editProject = (project: IProjectForm, id: string) => {

}

export const removeProject = (id: string) => {

}

export const getProjects = () => {
  try {
    onSnapshot(doc(db, 'projects'), snapshot => {
      const projects = snapshot.data();
      console.log(projects)
      // res(projects);
    });
  } catch (e) {
    console.log(e);
    
  }
}
