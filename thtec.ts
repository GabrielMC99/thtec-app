enum Status {
  activo = 'activo',
  inactivo = 'inactivo',
  suspendido = 'suspendido',
  baja = 'baja',
  eliminado = 'eliminado'
}

const direcciones = [
  {
    calle: 'Av. Siempre Viva',
    numero: 742,
    colonia: 'Springfield',
    cp: 12345,
    municipio: 'Springfield',
    estado: 'Springfield',
    pais: 'USA',
    creado: '2021-01-01',
    editado: '2021-01-01'
  }
]

const reclutadores = [
  {
    id: 1,
    usuario_id: 1212,
    status: Status.activo,
    creado: '2021-01-01',
    editado: '2021-01-01'
  }
]

const puestos = [
  {
    id: 1,
    nombre: 'Desarrollador',
    creado: '2021-01-01',
    editado: '2021-01-01'
  }
]

const lideres = [
  {
    id: 1,
    usuario_id: 1212,
    status: Status.activo,
    creado: '2021-01-01',
    editado: '2021-01-01'
  }
]

const arear = [
  {
    id: 1,
    nombre: 'comercial',
    creado: '2021-01-01',
    editado: '2021-01-01'
  },
  {
    id: 2,
    nombre: 'administrativa',
    creado: '2021-01-01',
    editado: '2021-01-01'
  },
  {
    id: 3,
    nombre: 'comercial',
    creado: '2021-01-01',
    editado: '2021-01-01'
  },
  {
    id: 3,
    nombre: 'nomina',
    creado: '2021-01-01',
    editado: '2021-01-01'
  }
]

const ubicaciones = [
  {
    id: 1,
    nombre: 'Santa fe',
    direccion_id: direcciones[0],
    creado: '2021-01-01',
    editado: '2021-01-01'
  },
  {
    id: 2,
    nombre: 'Home office',
    direccion_id: 'N/A',
    creado: '2021-01-01',
    editado: '2021-01-01'
  }
]

const usuarios = [
  {
    id: 1212,
    nombre: 'Gabriel',
    apellido: 'Martinez Camacho',
    empresa: 'THTEC',
    edad: 28,
    telefono: 3121234567,
    correo: 'gabriel@gmail.com',
    alta: '2021-01-01',
    baja: '2021-01-01',
    activo: true,
    status: Status.activo,
    direccion_id: direcciones[0],
    no_empleado: 123456,
    puesto: puestos[0],
    reclutador_id: reclutadores[0],
    sueldo: 10000,
    lider: lideres[0],
    // comercial: comerciales[0],
    ubicacion_id: ubicaciones[0],
    comentarios: 'Comentarios',
    creado: '2021-01-01',
    editado: '2021-01-01'
  }
]

enum Contrato {
  indefinido = 'indefinido',
  temporal = 'temporal',
  practicas = 'practicas'
}

const contratos = [
  {
    id: 1,
    usuario_id: usuarios[0],
    fecha_ingreso: '2021-01-01',
    fecha_inicio: '2021-01-01',
    duracion: 1,
    fecha_vencimineto: '2021-01-01',
    numero_contratos: 1,
    contrato: Contrato.indefinido,
    status: Status.activo
  }
]
