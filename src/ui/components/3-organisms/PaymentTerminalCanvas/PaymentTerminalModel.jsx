/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useContext, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { ThreeJSContext } from "../../../../contexts/ThreeJSContext";
import gsap from "gsap";

export function PaymentTerminalModel(props) {
  const { updateModel } = useContext(ThreeJSContext);
  const paymentTerminalRef = useRef(null);

  useEffect(() => {
    // console.log(paymentTerminalRef.current.children[24].material.color, updateModel.pickedColor);
    paymentTerminalRef.current.children[24].material.color.set(updateModel.pickedColor);
  }, [updateModel.pickedColor]);

  const { nodes, materials } = useGLTF("./models/payment_terminal.glb");

  updateModel.isRatation360Clicked === true ? handleRotation360() : null;
  function handleRotation360() {
    updateModel.setIsRatation360Clicked(false);
    gsap.to(paymentTerminalRef.current.rotation, {
      duration: 1,
      y: paymentTerminalRef.current.rotation.y + Math.PI * 1,
    });
  }

  updateModel.isRatation180Clicked === true ? handleRotation180() : null;
  function handleRotation180() {
    updateModel.setIsRatation180Clicked(false);
    gsap.to(paymentTerminalRef.current.rotation, {
      duration: 1,
      y: paymentTerminalRef.current.rotation.y + Math.PI * 0.5,
    });
  }

  return (
    <group {...props} ref={paymentTerminalRef} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.inner_screen.geometry}
        material={materials.blue_screen}
        position={[-0.15, 1.78, 0.94]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.85}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ingenico_text.geometry}
        material={materials.text_material}
        position={[0.66, 2.59, 0.99]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.move_3500_text.geometry}
        material={materials.text_material}
        position={[-1.15, 2.58, 0.99]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen_arrow_down.geometry}
        material={materials.text_material}
        position={[-0.25, 0.05, 0.91]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={14.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.outer_screen.geometry}
        material={materials.screen_material}
        position={[-0.2, 1.55, 0.93]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.outer_cirkle.geometry}
        material={materials.cirkel_btn_material}
        position={[1.15, -0.42, 0.94]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={11.48}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.inner_cirkle.geometry}
        material={materials.cirkel_btn_material}
        position={[1.15, -0.42, 0.94]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={11.48}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen_arrow_up.geometry}
        material={materials.text_material}
        position={[-0.18, -0.44, 0.91]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={14.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen_line_btn_left.geometry}
        material={materials.plastic_buttons_material}
        position={[-1.04, 0.8, 1.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.86, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.line_left.geometry}
        material={materials.text_material}
        position={[-0.68, -0.41, 0.91]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={13.13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.white_btn_with_cirkle.geometry}
        material={materials.plastic_btn_white_material}
        position={[0.85, 0.8, 1.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.86, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen_btn_down.geometry}
        material={materials.plastic_buttons_material}
        position={[-0.18, 0.8, 1.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.86, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.line_right.geometry}
        material={materials.text_material}
        position={[0.72, -0.41, 0.91]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={13.13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wireless_payment_icon.geometry}
        material={materials.text_material}
        position={[-0.7, 3.15, 0.36]}
        rotation={[-2.16, 0, Math.PI]}
        scale={-41.78}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen_btn_up.geometry}
        material={materials.plastic_buttons_material}
        position={[-0.61, 0.8, 1.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.86, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_2_text.geometry}
        material={materials.text_material}
        position={[-0.17, -0.99, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.39}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_2_a_text.geometry}
        material={materials.text_material}
        position={[0.06, -0.85, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_2_c_text.geometry}
        material={materials.text_material}
        position={[0.05, -0.99, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_2_b_text.geometry}
        material={materials.text_material}
        position={[0.2, -0.91, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen_line_btn_right.geometry}
        material={materials.plastic_buttons_material}
        position={[0.42, 0.8, 1.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.86, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_3_text.geometry}
        material={materials.text_material}
        position={[0.68, -0.99, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.39}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_3_d_text.geometry}
        material={materials.text_material}
        position={[0.91, -0.85, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_3_f_text.geometry}
        material={materials.text_material}
        position={[0.91, -0.99, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_3_e_text.geometry}
        material={materials.text_material}
        position={[1.05, -0.91, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body.geometry}
        material={materials.plastic_material}
        position={[-0.5, -0.55, -0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_1_text.geometry}
        material={materials.text_material}
        position={[-1.02, -0.99, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.39}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_1.geometry}
        material={materials.plastic_buttons_material}
        position={[-1.08, 0.2, 1.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.86, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_4_text.geometry}
        material={materials.text_material}
        position={[-1.02, -1.49, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.39}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_4_g_text.geometry}
        material={materials.text_material}
        position={[-0.79, -1.35, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_4_i_text.geometry}
        material={materials.text_material}
        position={[-0.75, -1.49, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_4_h_text.geometry}
        material={materials.text_material}
        position={[-0.65, -1.41, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_2.geometry}
        material={materials.plastic_buttons_material}
        position={[-0.23, 0.2, 1.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.86, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_3.geometry}
        material={materials.plastic_buttons_material}
        position={[0.62, 0.2, 1.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.86, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_4.geometry}
        material={materials.plastic_buttons_material}
        position={[-1.08, -0.3, 1.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.86, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_6_text.geometry}
        material={materials.text_material}
        position={[0.68, -1.49, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.39}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_7_text.geometry}
        material={materials.text_material}
        position={[-1.02, -1.99, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.39}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_5_text.geometry}
        material={materials.text_material}
        position={[-0.16, -1.49, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.39}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_5_j_text.geometry}
        material={materials.text_material}
        position={[0.15, -1.35, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_5_l_text.geometry}
        material={materials.text_material}
        position={[0.09, -1.49, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_5_k_text.geometry}
        material={materials.text_material}
        position={[0.21, -1.41, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_6_m_text.geometry}
        material={materials.text_material}
        position={[0.89, -1.35, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_6_o_text.geometry}
        material={materials.text_material}
        position={[0.89, -1.49, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_6_n_text.geometry}
        material={materials.text_material}
        position={[1.02, -1.41, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_7_p_text.geometry}
        material={materials.text_material}
        position={[-0.79, -1.85, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_7_r_text.geometry}
        material={materials.text_material}
        position={[-0.79, -1.99, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_7_q_text.geometry}
        material={materials.text_material}
        position={[-0.66, -1.85, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_7_s_text.geometry}
        material={materials.text_material}
        position={[-0.65, -1.99, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_5.geometry}
        material={materials.plastic_buttons_material}
        position={[-0.22, -0.3, 1.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.86, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_8_text.geometry}
        material={materials.text_material}
        position={[-0.16, -1.99, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.39}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_8_t_text.geometry}
        material={materials.text_material}
        position={[0.08, -1.85, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_8_v_text.geometry}
        material={materials.text_material}
        position={[0.08, -1.99, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_8_u_text.geometry}
        material={materials.text_material}
        position={[0.21, -1.91, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_7.geometry}
        material={materials.plastic_buttons_material}
        position={[-1.08, -0.8, 1.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.86, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_8.geometry}
        material={materials.plastic_buttons_material}
        position={[-0.22, -0.8, 1.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.86, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_9.geometry}
        material={materials.plastic_buttons_material}
        position={[0.62, -0.81, 1.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.86, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_12_dot.geometry}
        material={materials.text_material}
        position={[0.69, -2.38, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.38}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_6.geometry}
        material={materials.plastic_buttons_material}
        position={[0.62, -0.3, 1.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.86, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_12_semicolon_1.geometry}
        material={materials.text_material}
        position={[0.9, -2.39, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.24}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_11_0_text.geometry}
        material={materials.text_material}
        position={[-0.16, -2.49, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.39}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_12_semicolon_2.geometry}
        material={materials.text_material}
        position={[1.07, -2.34, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.24}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_13_x_text.geometry}
        material={materials.text_material}
        position={[-1.06, -2.99, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_9_text.geometry}
        material={materials.text_material}
        position={[0.68, -2, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.39}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_11_line.geometry}
        material={materials.text_material}
        position={[0.24, -2.59, 0.91]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[7.48, 13.13, 13.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_9_w_text.geometry}
        material={materials.text_material}
        position={[0.86, -1.86, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_9_y_text.geometry}
        material={materials.text_material}
        position={[0.9, -2, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_9_x_text.geometry}
        material={materials.text_material}
        position={[1.05, -1.86, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_9_z_text.geometry}
        material={materials.text_material}
        position={[1.04, -2, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.thing_with_arrow_1.geometry}
        material={materials.text_material}
        position={[-0.59, -2.62, 0.9]}
        rotation={[Math.PI / 2, -0.1, -Math.PI]}
        scale={[12.71, 14.59, 14.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.thing_with_arrow_3.geometry}
        material={materials.text_material}
        position={[-0.59, -2.62, 0.9]}
        rotation={[Math.PI / 2, -0.1, -Math.PI]}
        scale={[12.71, 14.59, 14.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.thing_with_arrow_4.geometry}
        material={materials.text_material}
        position={[-0.59, -2.62, 0.9]}
        rotation={[Math.PI / 2, -0.1, -Math.PI]}
        scale={[12.71, 14.59, 14.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.thing_with_arrow_2.geometry}
        material={materials.text_material}
        position={[-0.59, -2.62, 0.9]}
        rotation={[Math.PI / 2, -0.1, -Math.PI]}
        scale={[12.71, 14.59, 14.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_11_spacebar.geometry}
        material={materials.text_material}
        position={[0.39, -2.6, 0.91]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[7.39, 14.38, 14.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_10.geometry}
        material={materials.plastic_buttons_material}
        position={[-1.08, -1.3, 1.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.86, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_11.geometry}
        material={materials.plastic_buttons_material}
        position={[-0.22, -1.3, 1.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.86, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["btn_14_<_text"].geometry}
        material={materials.text_material}
        position={[-0.19, -2.99, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_13_red.geometry}
        material={materials.btn_red}
        position={[-0.54, -3.86, 1.04]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={[0.86, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_12.geometry}
        material={materials.plastic_buttons_material}
        position={[0.62, -1.3, 1.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.86, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_15_o_text.geometry}
        material={materials.text_material}
        position={[0.64, -2.99, 1.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_14_yellow.geometry}
        material={materials.btn_yellow}
        position={[-0.26, -1.84, 1.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.86, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_15_green.geometry}
        material={materials.btn_green}
        position={[0.64, -3.86, 0.93]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.86, 1, 0.7]}
      />
    </group>
  );
}

useGLTF.preload("/models/payment_terminal.glb");
