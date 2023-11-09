#! /usr/bin/env ts-node
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { resolve } from "path";

const packageDefinition = protoLoader.loadSync(resolve(__dirname,'../../shared/proto/list.proto'),{
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const LIST = grpc.loadPackageDefinition(packageDefinition).LIST;

//@ts-ignore
const client = new LIST.ListService('localhost:9001',grpc.credentials.createInsecure());

client.getList({
  client_type: 2608,
  cursor: "0",
  id_type: 2,
  limit: 20,
  sort_type: 200
},(err,response)=>{
  console.log(response)
})


