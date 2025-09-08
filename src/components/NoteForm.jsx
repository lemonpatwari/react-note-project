import {useState} from 'react';
import TextInput from "./inputs/TextInput.jsx";
import SelectInput from "./inputs/SelectInput.jsx";
import TextAreaInput from "./inputs/TextAreaInput.jsx";

function NoteForm({notes, setNotes}) {
    const [formData, setFormData] = useState({
        title: '', priority: 'Low', category: 'Work', description: ''
    });

    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleChange = (e) => {
        const {name, id, value} = e.target;
        setFormData(prevState => ({
            ...prevState, [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.description) return;

        const newNote = {id: Date.now(), ...formData};
        setNotes([...notes, newNote]);
        setFormData({
            title: '', priority: 'Low', category: 'Work', description: ''
        });
    }
    return (<>
        <div className="px-3">
            <button onClick={(e) => setIsFormVisible(!isFormVisible)}
                    className="w-full bg-purple-500 text-white py-3 px-3 rounded-lg cursor-pointer hover:bg-purple-700">
                {isFormVisible ? 'Hide Form x' : 'Add New Note +'}
            </button>
        </div>

        {isFormVisible && (
            <form if onSubmit={handleSubmit} className="mb-6">
                <div>
                    <TextInput
                        label="Title"
                        name="title"
                        value={formData.title}
                        placeholder="Enter note title"
                        onChange={handleChange}
                        required={true}
                    />
                </div>

                <div>
                    <SelectInput
                        label="Priority"
                        name="priority"
                        value={formData.priority}
                        options={[
                            {value: 'Low', label: 'Low'},
                            {value: 'Medium', label: 'Medium'},
                            {value: 'High', label: 'High'},
                        ]}
                        onChange={handleChange}
                        required={true}
                    />
                </div>

                <div>
                    <SelectInput
                        label="Category"
                        name="category"
                        value={formData.category}
                        options={[
                            {value: 'Work', label: 'Work'},
                            {value: 'Personal', label: 'Personal'},
                            {value: 'Ideas', label: 'Ideas'},
                        ]}
                        onChange={handleChange}
                        required={true}
                    />
                </div>

                <div>
                    <TextAreaInput
                        label="Description"
                        name="description"
                        value={formData.description}
                        placeholder="Enter note description"
                        onChange={handleChange}
                        required={true}
                    />
                </div>

                <div className="px-3 py-3">
                    <button type="submit"
                            className="w-full bg-purple-500 text-white py-3 px-3 rounded-lg cursor-pointer hover:bg-purple-700">Submit
                    </button>
                </div>
            </form>
        )}
    </>);
}

export default NoteForm;