class {'::mongodb::server':
  port    => 27018,
  verbose => true,
  dbpath => '/home/data',
}
