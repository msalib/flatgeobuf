// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from './flatbuffers/flatbuffers';

import { Column } from './column';
import { Geometry } from './geometry';


/**
 * @constructor
 */
export class Feature {
  /**
   * @type flatbuffers.ByteBuffer
   */
  bb: flatbuffers.ByteBuffer|null = null;

  /**
   * @type number
   */
  bb_pos = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns Feature
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Feature {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

/**
 * @param flatbuffers.ByteBuffer bb
 * @param Feature= obj
 * @returns Feature
 */
static getRootAsFeature(bb:flatbuffers.ByteBuffer, obj?:Feature):Feature {
  return (obj || new Feature()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 * @param flatbuffers.ByteBuffer bb
 * @param Feature= obj
 * @returns Feature
 */
static getSizePrefixedRootAsFeature(bb:flatbuffers.ByteBuffer, obj?:Feature):Feature {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Feature()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 * @param Geometry= obj
 * @returns Geometry|null
 */
geometry(obj?:Geometry):Geometry|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Geometry()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

/**
 * @param number index
 * @returns number
 */
properties(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

/**
 * @returns number
 */
propertiesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * @returns Uint8Array
 */
propertiesArray():Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

/**
 * @param number index
 * @param Column= obj
 * @returns Column
 */
columns(index: number, obj?:Column):Column|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new Column()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

/**
 * @returns number
 */
columnsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * @param flatbuffers.Builder builder
 */
static startFeature(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset geometryOffset
 */
static addGeometry(builder:flatbuffers.Builder, geometryOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, geometryOffset, 0);
}

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset propertiesOffset
 */
static addProperties(builder:flatbuffers.Builder, propertiesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, propertiesOffset, 0);
}

/**
 * @param flatbuffers.Builder builder
 * @param Array.<number> data
 * @returns flatbuffers.Offset
 */
static createPropertiesVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]);
  }
  return builder.endVector();
}

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startPropertiesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset columnsOffset
 */
static addColumns(builder:flatbuffers.Builder, columnsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, columnsOffset, 0);
}

/**
 * @param flatbuffers.Builder builder
 * @param Array.<flatbuffers.Offset> data
 * @returns flatbuffers.Offset
 */
static createColumnsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
}

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startColumnsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endFeature(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset offset
 */
static finishFeatureBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset);
}

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset offset
 */
static finishSizePrefixedFeatureBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, undefined, true);
}

static createFeature(builder:flatbuffers.Builder, geometryOffset:flatbuffers.Offset, propertiesOffset:flatbuffers.Offset, columnsOffset:flatbuffers.Offset):flatbuffers.Offset {
  Feature.startFeature(builder);
  Feature.addGeometry(builder, geometryOffset);
  Feature.addProperties(builder, propertiesOffset);
  Feature.addColumns(builder, columnsOffset);
  return Feature.endFeature(builder);
}
}