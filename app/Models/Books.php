<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Books extends Model
{
    use HasFactory;

    protected $fillable = ['autor','titulo','edicion','datos_publicacion','tipo_contenido','restrincciones','materia','proveedor'];
}
