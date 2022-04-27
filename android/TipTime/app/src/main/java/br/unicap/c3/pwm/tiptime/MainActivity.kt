package br.unicap.c3.pwm.tiptime

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import br.unicap.c3.pwm.tiptime.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
    }
}