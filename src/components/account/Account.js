import React from 'react';
import './account.css';
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export default function Account() {

    //state to upload images/files
    const [file, setFile] = useState('');
    //state to show upload progress
    const [percent, setPercent] = useState(0);

    //handle file upload event and update progress
    function handleChange(event) {
        setFile(event.target.files[0]);
    };

    function handleUpload() {
        if (!file) {
            alert("Please choose a file first!")
        }
        const storageRef = ref(storage, `/user/${file.name}`);

        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                });
            }
        );
    };

    return (
        <div className='account'>
            <div className="image_container my-2 text-center">
                <label htmlFor="image">Choose Your Profile Picture</label>
                <div className="ans">
                    <input type="file" accept="image/*" onChange={handleChange} />
                </div>
            </div>
        </div>
    )
}
