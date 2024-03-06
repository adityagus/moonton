<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Movie;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\Admin\Movie\Store;
use App\Http\Requests\Admin\Movie\Update;


class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $movie = Movie::withTrashed()->orderBy('deleted_at', 'desc')->get();
        return Inertia::render('Admin/Movie/Index', [
            'movies' => $movie,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Movie/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Store $request)
    {
      $data = $request->validated();
      $data['thumbnail'] = Storage::disk('public')->put('movies', $request->file('thumbnail'));
      $data['slug'] = Str::slug($data['name']);
      $movie = Movie::create($data);

      return redirect(route('admin.dashboard.movie.index'))->with([
        'message' => 'Insert Movie Successfully',
        'type' => 'success',
      ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(movie $movie)
    {
        return Inertia::render('Admin/Movie/Edit', [
            'movie' => $movie,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Update $request, Movie $movie)
    {
        $data = $request->validated();
        if($request->file('thumbnail')){
            $data['thumbnail'] = Storage::disk('public')->put('movie', $request->file('thumbnail'));
            Storage::disk('public')->delete($movie->thumbnail);
        }

        $movie->update($data);
        
        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => "Movie updated successfully",
            'type' =>'success',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Movie $movie)
    {
        $movie->delete();
        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => "Movie deleted successfully",
            'type' => 'success',
        ]);
    }

    public function restore($movie){
      Movie::withTrashed()->find($movie)->restore();
      return redirect(route('admin.dashboard.movie.index'))->with([
        'message' => "Movie restored successfully",
        'type' =>'success',
      ]);
    }
}
