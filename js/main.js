<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notas promedio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
</head>
<body>
    <body>
        <!-- container vuejs -->
        <div id="app">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h1>Agregar nota</h1>
                        <label>Nombre:</label>
                        <input type="text" v-model="nombre" class="form-control">
    
                        <label>Promedio:</label>
                        <input type="number" min="0" max="10" v-model="promedio" class="form-control">
    
                        <input type="button" value="Guardar" class="btn btn-success" v-on:click="agregarnota">
                    </div>
    
                    <div class="col-md-6">
                        <h1 v-if="lista.length > 0">Lista de notas</h1>
                        <h1 v-else>Lista de notas</h1>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Promedio</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in lista">
                                    <td v-text="item.nombre"></td>
                                    <td v-text="item.promedio"></td>
                                    <td :style="{ color: item.estadoColor }">{{ item.estado }}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="3">Notas finales</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>  
        </div>
        <!-- end container -->

    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>

