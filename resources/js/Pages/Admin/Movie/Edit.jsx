import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/Authenticated/Index"
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { Inertia } from "@inertiajs/inertia";

export default function Edit({auth, movie}){
  const { data, setData, post, processing, errors } = useForm({
    ...movie
});


const onHandleChange = (event) => {
    setData(event.target.name, event.target.type == 'file' ? event.target.files[0] : event.target.value);
};

const submit = (e) => {
    e.preventDefault();

    if(data.thumbnail === movie.thumbnail){
      delete data.thumbnail;
    }


    Inertia.post(route("admin.dashboard.movie.update", movie.id), {
      _method: "PUT",
      ...data
    })
    
    
};

  
  console.log('create page')  
  return (
    <>
      <Authenticated auth={auth}>
        <Head title="Admin - Update Movie"/>
        <h1 className="text-xl">Update Movie : {movie.name}</h1>
        <hr className="mb-4" />
        <InputError message={errors}/>
        <form action="" onSubmit={submit}>
          <InputLabel forInput="name" value="Name"/>
          <TextInput 
            type="text"
            name="name"
            defaultValue={movie.name}
            variant="primary-outline"
            placeholder="Enter the name of the movie"
            handleChange={onHandleChange}
            isError={errors.name}
          />
          <InputLabel forInput="category" value="Category"/>
          <TextInput 
            type="text"
            name="category"
            defaultValue={movie.category}
            id="category"
            variant="primary-outline"
            placeholder="Enter the category of the movie"
            handleChange={onHandleChange}
            isError={errors.category}
          />
          <InputLabel forInput="video_url" value="Video Url"/>
          <TextInput 
            type="text"
            name="video_url"
            defaultValue={movie.video_url}
            id="video_url"
            variant="primary-outline"
            placeholder="Enter the video url of the movie"
            handleChange={onHandleChange}
            isError={errors.video_url}
          />
          <InputLabel forInput="thumbnail" value="Thumbnail"/>
          <img src={`/storage/${movie.thumbnail}`} alt="asd" className="w-40"/>
          <TextInput 
            type="file"
            name="thumbnail"
            id="thumbnail"
            variant="primary-outline"
            placeholder="Insert thumbnail of the movie"
            handleChange={onHandleChange}
            isError={errors.thumbnail}
          />
          <InputLabel forInput="rating" value="Rating"/>
          <TextInput 
            type="text"
            name="rating"
            id="rating"
            defaultValue={movie.rating}
            variant="primary-outline"
            placeholder="Enter the rating of the movie"
            handleChange={onHandleChange}
            isError={errors.rating}
          />
          <div className="flex flex-row mt-4 items-center">
            <InputLabel forInput="is_featured" value="Is Featured" className="mr-3 mt-1"/>
            <Checkbox
              name="is_featured"
              handleChange={(e) => setData("is_featured", e.target.checked)}
              checked={movie.is_featured}
            />
          </div>
          <PrimaryButton 
          type="submit"
          className="mt-4"
          processing={processing}
          >
            Submit
          </PrimaryButton>
        </form>
      </Authenticated>
    </>
  )
}