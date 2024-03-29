<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CarManufacturer extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'manufacturer', 'image', 'image_size'
    ];
}
