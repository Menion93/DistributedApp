class {'::mongodb::server':
  port    => 27018,
  verbose => true,
  bind_ip =>  ['0.0.0.0'],
  dbpath => '/home/data',
}
