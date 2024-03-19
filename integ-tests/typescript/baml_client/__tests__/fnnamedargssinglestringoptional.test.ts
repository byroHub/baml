// This file is auto-generated. Do not edit this file manually.
//
// Disable formatting for this file to avoid linting errors.
// tslint:disable
// @ts-nocheck
/* eslint-disable */

import b from '../';

import { FireBamlEvent, traceAsync } from '@boundaryml/baml-core/ffi_layer';


describe('test_case:mobile_gold', () => {
  const test_fn = traceAsync('mobile_gold', 'null', [['impl', 'string']], 'positional', async (impl) => {
    FireBamlEvent.tags({
      'test_dataset_name': 'FnNamedArgsSingleStringOptional',
      'test_case_name': 'test',
      'test_case_arg_name': `test_mobile_gold[FnNamedArgsSingleStringOptional-${impl}]`,
      'test_cycle_id': process.env.BOUNDARY_PROCESS_ID || 'local-run',
    });
    const test_case = { "myString": null };
    const result = await b.FnNamedArgsSingleStringOptional.getImpl(impl).run(
      test_case
    );
  });

  describe('function:FnNamedArgsSingleStringOptional', () => {
    test('impl:v1', async () => {
      await test_fn('v1');
    }, 60000);
  });
});

describe('test_case:upper_pink', () => {
  const test_fn = traceAsync('upper_pink', 'null', [['impl', 'string']], 'positional', async (impl) => {
    FireBamlEvent.tags({
      'test_dataset_name': 'FnNamedArgsSingleStringOptional',
      'test_case_name': 'test',
      'test_case_arg_name': `test_upper_pink[FnNamedArgsSingleStringOptional-${impl}]`,
      'test_cycle_id': process.env.BOUNDARY_PROCESS_ID || 'local-run',
    });
    const test_case = { "myString": "value" };
    const result = await b.FnNamedArgsSingleStringOptional.getImpl(impl).run(
      test_case
    );
  });

  describe('function:FnNamedArgsSingleStringOptional', () => {
    test('impl:v1', async () => {
      await test_fn('v1');
    }, 60000);
  });
});

