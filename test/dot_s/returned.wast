(module
  (memory 0 4294967295)
  (import $_Znwm "env" "_Znwm")
  (import $_ZN5AppleC1Ev "env" "_ZN5AppleC1Ev")
  (import $memcpy "env" "memcpy")
  (export "_Z3foov" $_Z3foov)
  (export "_Z3barPvS_l" $_Z3barPvS_l)
  (func $_Z3foov (result i32)
    (block $fake_return_waka123
      (block
        (br $fake_return_waka123
          (call_import $_ZN5AppleC1Ev
            (call_import $_Znwm
              (i32.const 1)
            )
          )
        )
      )
    )
  )
  (func $_Z3barPvS_l (param $$0 i32) (param $$1 i32) (param $$2 i32) (result i32)
    (block $fake_return_waka123
      (block
        (br $fake_return_waka123
          (call_import $memcpy
            (get_local $$2)
            (get_local $$1)
            (get_local $$0)
          )
        )
      )
    )
  )
)
;; METADATA: { "asmConsts": {} }
