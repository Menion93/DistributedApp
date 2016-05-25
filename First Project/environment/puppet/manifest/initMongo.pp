class {'::mongodb::server':
  port    => 27018,
  verbose => true,
  bind_ip =>  ['10.11.1.201'],
  dbpath => '/home/data',
}
