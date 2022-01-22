FROM golang as build

WORKDIR /app

COPY ./main.go .

RUN go build main.go


FROM scratch

COPY --from=build /app/main .

CMD [ "./main" ]
