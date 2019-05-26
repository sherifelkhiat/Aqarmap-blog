<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::prefix('auth')->group(function () {
    Route::post('login', 'AuthController@login');

    Route::get('refresh', 'AuthController@refresh');

    Route::get('/article', 'ArticleController@index');

    Route::group(['middleware' => 'auth:api'], function(){
        Route::post('logout', 'AuthController@logout');

        Route::get('user', 'AuthController@user');
    
        Route::get('/category', 'CategoryController@index');

        Route::post('/category', 'CategoryController@store');
    
        Route::post('/article', 'ArticleController@store');
    });
});

Route::get('/article/{article}', 'ArticleController@show');

Route::post('/comment', 'CommentController@store');