FROM golang:latest as builder

ENV CGO_ENABLED=1
ENV GOOS=linux

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . ./
RUN go generate ./...
RUN go build -o merline

FROM frolvlad/alpine-glibc

ENV MERLINE_HOST=0.0.0.0

RUN apk --update upgrade
RUN apk add sqlite
RUN rm -rf /var/cache/apk/*

COPY --from=builder /app/merline /

ENTRYPOINT ["/merline"]
