# A basic HAPI starter project [![Build Status](http://img.shields.io/jenkins/s/https/build-shifter.rhcloud.com/hapi-build.svg)](https://build-shifter.rhcloud.com/job/hapi-build/) [![Dependency Check](http://img.shields.io/david/ryanj/hapi-base.svg)](https://david-dm.org/ryanj/hapi-base) [![Deploy](https://img.shields.io/badge/Launch_on-OpenShift-brightgreen.svg)](https://openshift.redhat.com/app/console/application_type/custom?cartridges%5B%5D=nodejs-0.10&initial_git_url=https%3A%2F%2Fgithub.com%2Fryanj%2Fhapi-base.git&name=hapi)
*With support for serving easy APIs and static content*

To deploy a clone of this application using the [`rhc` command line tool](http://rubygems.org/gems/rhc):

    rhc app create hapi nodejs-0.10 --from-code=https://github.com/ryanj/hapi-base.git
    
Or [link to a web-based clone+deploy](https://openshift.redhat.com/app/console/application_type/custom?cartridges%5B%5D=nodejs-0.10&initial_git_url=https%3A%2F%2Fgithub.com%2Fryanj%2Fhapi-base.git) on [OpenShift Online](http://OpenShift.com) or on [your own OpenShift cloud](http://openshift.github.io): 

    https://openshift.redhat.com/app/console/application_type/custom?cartridges%5B%5D=nodejs-0.10&initial_git_url=https%3A%2F%2Fgithub.com%2Fryanj%2Fhapi-base.git

## Local Development
Install dependencies:

```bash
npm install
```

Start a local server:

```bash
npm start
```

## License
This code is dedicated to the public domain to the maximum extent permitted by applicable law, pursuant to CC0 (http://creativecommons.org/publicdomain/zero/1.0/)
