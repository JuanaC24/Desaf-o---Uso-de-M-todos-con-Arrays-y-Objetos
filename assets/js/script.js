document.write('<h1>Estadisticas Centro Medico Ñuñoa</h1>');

        var radiologia = [
            {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
            {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
            {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
            {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
            {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
        ];

        // Eliminar el primer y último elemento del arreglo de Radiología
        radiologia.shift(); // Elimina el primer elemento
        radiologia.pop();   // Elimina el último elemento

        var traumatologia = [
            {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SÁNCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
            {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
            {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
            {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
            {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
            {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
            {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
        ];

        var dental = [
            {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
            {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
            {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
            {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
            {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
            {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
        ];

        // Función para agregar las nuevas horas al arreglo de Traumatología
        function agregarHorasATraumatologia(nuevasHoras) {
            var horas = nuevasHoras.split("\n");
            horas.forEach(hora => {
                var datosConsulta = hora.split(" ");
                var nuevaConsulta = {
                    hora: datosConsulta[0],
                    especialista: datosConsulta[1] + " " + datosConsulta[2],
                    paciente: datosConsulta[3] + " " + datosConsulta[4],
                    rut: datosConsulta[5],
                    prevision: datosConsulta[6]
                };
                traumatologia.push(nuevaConsulta);
            });
        }

        // Agregar nuevas horas al arreglo de Traumatología
        agregarHorasATraumatologia(`09:00 RENÉ POBLETE ANA GELLONA 13123329-7 ISAPRE
        09:30 MARIA SOLAR RAMIRO ANDRADE 12221451-K FONASA
        10:00 RAUL LOYOLA CARMEN ISLA 10112348-3 ISAPRE
        10:30 ANTONIO LARENAS PABLO LOAYZA 13453234-1 ISAPRE
        12:00 MATIAS ARAVENA SUSANA POBLETE 14345656-6 FONASA`);

          // Imprimir en la página HTML la lista de consultas médicas de Dental
        document.write("<h2>Consultas Médicas de Dental</h2>");
        dental.forEach(consulta => {
            // Agregar la clase "consulta-container" al contenedor
            document.write(`<div class="consulta-container">`);
            // Estilo de texto
            document.write(`<p style="font-style: italic;">${consulta.hora} - ${consulta.especialista} - ${consulta.paciente} - ${consulta.rut} - ${consulta.prevision}</p>`);
            // Cierre del contenedor
            document.write(`</div>`);
        });
        

        // Imprimir un listado total de todos los pacientes que se atendieron en el centro médico
        document.write("<h2>Listado de Todos los Pacientes</h2>");
        var todosLosPacientes = [];
        radiologia.forEach(consulta => todosLosPacientes.push(consulta.paciente));
        traumatologia.forEach(consulta => todosLosPacientes.push(consulta.paciente));
        dental.forEach(consulta => todosLosPacientes.push(consulta.paciente));
        todosLosPacientes.forEach(paciente => {
            document.write(`<p>${paciente}</p>`);
        });

        // Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas de Dental
        document.write("<h2>Pacientes de Dental con Previsión ISAPRE</h2>");
        dental.filter(consulta => consulta.prevision === "ISAPRE").forEach(consulta => {
            document.write(`<p>${consulta.paciente} - ${consulta.prevision}</p>`);
        });

        // Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas de Traumatología
        document.write("<h2>Pacientes de Traumatología con Previsión FONASA</h2>");
        traumatologia.filter(consulta => consulta.prevision === "FONASA").forEach(consulta => {
            document.write(`<p>${consulta.paciente} - ${consulta.prevision}</p>`);
        });

        // Función para generar una tabla con los datos de los pacientes
        function generarTabla(pacientes) {
            var table = "<table>";
            table += "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>";
            pacientes.forEach(consulta => {
                table += `<tr><td>${consulta.hora}</td><td>${consulta.especialista}</td><td>${consulta.paciente}</td><td>${consulta.rut}</td><td>${consulta.prevision}</td></tr>`;
            });
            table += "</table>";
            return table;
        }

        // Imprimir tablas para cada especialidad
        document.write("<h2>Radiología</h2>");
        document.write(generarTabla(radiologia));

        document.write("<h2>Traumatología</h2>");
        document.write(generarTabla(traumatologia));