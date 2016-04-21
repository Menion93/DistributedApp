class {'::mongodb::server':
  port    => 27018,
  verbose => true,
  auth => true, 
}

mongodb::db { 'PizzeDB':
  user          => 'user',
  password_hash => '556112175fb8dd12e8efeaf251cf7626',
}