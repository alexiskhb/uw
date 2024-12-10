## Install kubectl

`brew install kubectl`

Skaffold is used for local development

`brew install skaffold`

## Create and start local kubernetes cluster

`brew install minikube`

`minikube addons enable ingress`

`minikube addons enable ingress-dns`

`minikube start`

## Clone repository

`git clone https://github.com/alexiskhb/uw`

`cd uw`

Create namespace

`kubectl apply -f kubernetes/namespace.yaml`

## mkcert

*In project root directory*

We use mkcert to easily handle creation of trusted certificates locally

`brew install mkcert nss`

`mkdir certs && cd certs && mkcert uw.local`

`mkcert -install`

Mount certificates to k8s namespace

`kubectl create secret generic nginx-certs --from-file=uw.local.pem --from-file=uw.local-key.pem -n uw-namespace`

## Create configmaps

`kubectl create configmap nginx-config --from-file=nginx/nginx.conf -n uw-namespace`

`kubectl create configmap keycloak-config --from-file=keycloak/realms/uwatcher-realm.json -n uw-namespace`
