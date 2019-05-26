<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $with = ['comments', 'category'];

    protected $fillable = ['title', 'content', 'category_id'];

    public function comments()
    {
        return $this->hasMany('App\Models\Comment');
    }

    public function category()
    {
        return $this->belongsTo('App\Models\Category');
    }
}
