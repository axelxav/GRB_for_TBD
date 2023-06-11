// app/books/QueryBuilder.ts

//"use client";
//
//export function buildQuery(table: string): string {
//    let query = `SELECT * FROM ${table}`;  
//    return query;
//  }
//export function buildQuery(table: string, conditions: string[], orderBy?: string): string {
//    let query = `SELECT * FROM ${table}`;
//  
//    if (conditions.length > 0) {
//      const whereClause = conditions.join(' AND ');
//      query += ` WHERE ${whereClause}`;
//    }
//  
//    if (orderBy) {
//      query += ` ORDER BY ${orderBy}`;
//    }
//  
//    return query;
//  }
  