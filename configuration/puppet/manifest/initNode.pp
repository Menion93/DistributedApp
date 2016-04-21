
package { 'express-generator' :
	ensure => present,
	provider => npm,
}

package { 'express' :
	ensure => present,
	provider => npm,
}

package { 'jade' :
	ensure => present,
	provider => npm,
}

package { 'mongoose' :
	ensure => present,
	provider => npm,
}