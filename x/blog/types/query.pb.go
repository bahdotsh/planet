// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: blog/query.proto

package types

import (
	context "context"
	fmt "fmt"
	_ "github.com/cosmos/cosmos-sdk/types/query"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

func init() { proto.RegisterFile("blog/query.proto", fileDescriptor_6e22cd6d352f3384) }

var fileDescriptor_6e22cd6d352f3384 = []byte{
	// 180 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x24, 0xce, 0x31, 0x0e, 0x82, 0x30,
	0x14, 0xc6, 0x71, 0x18, 0xd4, 0x84, 0x45, 0xe3, 0x48, 0x4c, 0x07, 0x47, 0x87, 0xbe, 0xa0, 0xab,
	0x93, 0x37, 0x70, 0x75, 0x7b, 0x25, 0x4d, 0x6d, 0x02, 0x7d, 0x4f, 0x5a, 0x8c, 0xdc, 0xc2, 0x63,
	0x39, 0x32, 0x3a, 0x1a, 0xb8, 0x88, 0x81, 0xce, 0xdf, 0x2f, 0x5f, 0xfe, 0xd9, 0x46, 0x55, 0x64,
	0xe0, 0xd1, 0xea, 0xa6, 0x93, 0xdc, 0x50, 0xa0, 0xed, 0x1a, 0x99, 0x25, 0x57, 0xe8, 0x74, 0x90,
	0xd3, 0x98, 0xef, 0x0c, 0x91, 0xa9, 0x34, 0x20, 0x5b, 0x40, 0xe7, 0x28, 0x60, 0xb0, 0xe4, 0x7c,
	0xe4, 0xf9, 0xa1, 0x24, 0x5f, 0x93, 0x07, 0x85, 0x5e, 0xc7, 0x1f, 0x78, 0x16, 0x4a, 0x07, 0x2c,
	0x80, 0xd1, 0x58, 0x37, 0xe3, 0x68, 0x8f, 0xab, 0x6c, 0x71, 0x9d, 0xc4, 0xe5, 0xfc, 0x19, 0x44,
	0xda, 0x0f, 0x22, 0xfd, 0x0d, 0x22, 0x7d, 0x8f, 0x22, 0xe9, 0x47, 0x91, 0x7c, 0x47, 0x91, 0xdc,
	0xf6, 0xc6, 0x86, 0x7b, 0xab, 0x64, 0x49, 0x35, 0x20, 0x33, 0xc4, 0x10, 0x78, 0xc1, 0xdc, 0x19,
	0x3a, 0xd6, 0x5e, 0x2d, 0xe7, 0xb7, 0xd3, 0x3f, 0x00, 0x00, 0xff, 0xff, 0x7c, 0xe6, 0x8f, 0xef,
	0xbc, 0x00, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryClient interface {
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

// QueryServer is the server API for Query service.
type QueryServer interface {
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "app.planet.blog.Query",
	HandlerType: (*QueryServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams:     []grpc.StreamDesc{},
	Metadata:    "blog/query.proto",
}