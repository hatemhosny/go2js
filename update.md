# Update

## Update Go version

```bash
bash

go version

which go

rm -rf /usr/bin/go

curl -O https://dl.google.com/go/go1.18.5.linux-amd64.tar.gz

tar -xvf go1.18.5.linux-amd64.tar.gz

mv go /usr/local

export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export PATH=$PATH:$GOROOT/bin:$GOPATH/bin

go version
```

## Update Gopherjs

```bash
GO111MODULE=off go get -v github.com/gopherjs/gopherjs
export GOPHERJS_GOROOT="$(go env GOROOT)"
```

update Go version in `src/compile/compile.go`
pull changes in pkg (from playground submodule)
